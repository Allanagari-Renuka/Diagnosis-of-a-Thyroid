import requests

BASE_URL = 'http://localhost:5000'

def test_health_check():
    response = requests.get(f'{BASE_URL}/api/health')
    print("Health Check Response:")
    print(response.json())

if __name__ == '__main__':
    test_health_check()
    print("\nNote: For prediction tests, you'll need to:")
    print("1. Have the model file in place")
