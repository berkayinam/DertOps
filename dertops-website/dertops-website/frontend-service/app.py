from flask import Flask, render_template, request, redirect, url_for, session
import requests
import json

app = Flask(__name__)
app.secret_key = 'dertops_secret_key'

AUTH_SERVICE_URL = "http://auth-service:8081"
USER_SERVICE_URL = "http://user-service:8082"

@app.route('/')
def home():
    if 'username' not in session:
        return redirect(url_for('login'))
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        response = requests.post(f"{AUTH_SERVICE_URL}/login", 
                              json={'username': username, 'password': password})
        
        if response.status_code == 200:
            session['username'] = username
            return redirect(url_for('home'))
        else:
            return render_template('login.html', error="Geçersiz kullanıcı adı veya şifre")
    
    return render_template('login.html')

@app.route('/team')
def team():
    if 'username' not in session:
        return redirect(url_for('login'))
    
    users = ['berkay', 'eren', 'berke']
    profiles = []
    
    for user in users:
        response = requests.get(f"{USER_SERVICE_URL}/users/{user}")
        if response.status_code == 200:
            profiles.append(response.json())
    
    return render_template('team.html', profiles=profiles)

@app.route('/contact')
def contact():
    if 'username' not in session:
        return redirect(url_for('login'))
    return render_template('contact.html')

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=7777) 