from flask import Flask, jsonify

app = Flask(__name__)

# Mock user database
users = {
    '1': {
        'username': 'admin',
        'email': 'admin@dertops.com',
        'role': 'Administrator'
    }
}

@app.route('/user/<user_id>')
def get_user(user_id):
    user = users.get(user_id)
    if user:
        return jsonify(user)
    return jsonify({'error': 'User not found'}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8082) 