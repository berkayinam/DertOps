from flask import Flask, render_template, request, redirect, url_for, session
import requests
import os

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', 'your-secret-key')  # Change this in production

AUTH_SERVICE_URL = os.environ.get('AUTH_SERVICE_URL', 'http://auth-service:8081')
USER_SERVICE_URL = os.environ.get('USER_SERVICE_URL', 'http://user-service:8082')

@app.route('/')
def index():
    if 'user_id' not in session:
        return redirect(url_for('login'))
    return redirect(url_for('dashboard'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        
        if not username or not password:
            return render_template('login.html', error='Username and password are required')
        
        try:
            response = requests.post(f'{AUTH_SERVICE_URL}/login', json={
                'username': username,
                'password': password
            }, timeout=5)
            
            if response.status_code == 200:
                data = response.json()
                session['user_id'] = data['user_id']
                return redirect(url_for('dashboard'))
            else:
                return render_template('login.html', error='Invalid credentials')
        except requests.exceptions.RequestException as e:
            print(f"Error connecting to auth service: {e}")
            return render_template('login.html', error='Service unavailable')
    
    return render_template('login.html')

@app.route('/dashboard')
def dashboard():
    if 'user_id' not in session:
        return redirect(url_for('login'))
    
    try:
        response = requests.get(f'{USER_SERVICE_URL}/user/{session["user_id"]}', timeout=5)
        if response.status_code == 200:
            user_data = response.json()
            return render_template('dashboard.html', user=user_data)
        else:
            return redirect(url_for('login'))
    except requests.exceptions.RequestException as e:
        print(f"Error connecting to user service: {e}")
        return redirect(url_for('login'))

@app.route('/logout')
def logout():
    session.pop('user_id', None)
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=7777) 