from flask import Flask, render_template, request, redirect, url_for, session
import requests

app = Flask(__name__)
app.secret_key = 'your-secret-key'  # Change this to a secure secret key

AUTH_SERVICE_URL = 'http://auth-service:8081'
USER_SERVICE_URL = 'http://user-service:8082'

# Public routes
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/team')
def team():
    return render_template('team.html')

# Admin routes
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        try:
            response = requests.post(f'{AUTH_SERVICE_URL}/login', json={
                'username': username,
                'password': password
            })
            
            if response.status_code == 200:
                data = response.json()
                session['user_id'] = data['user_id']
                return redirect(url_for('admin_dashboard'))
            else:
                return render_template('admin/login.html', error='Invalid credentials')
        except requests.exceptions.RequestException:
            return render_template('admin/login.html', error='Service unavailable')
    
    return render_template('admin/login.html')

@app.route('/admin')
def admin():
    if 'user_id' not in session:
        return redirect(url_for('login'))
    return redirect(url_for('admin_dashboard'))

@app.route('/admin/dashboard')
def admin_dashboard():
    if 'user_id' not in session:
        return redirect(url_for('login'))
    
    try:
        response = requests.get(f'{USER_SERVICE_URL}/user/{session["user_id"]}')
        if response.status_code == 200:
            user_data = response.json()
            return render_template('admin/dashboard.html', user=user_data)
        else:
            return redirect(url_for('login'))
    except requests.exceptions.RequestException:
        return redirect(url_for('login'))

@app.route('/logout')
def logout():
    session.pop('user_id', None)
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=7777) 