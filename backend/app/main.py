from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="DTR Original Backend", version="1.0.0")

servers_db = [
    {"id": "1", "name": "Web Server", "type": "Node.js", "status": "running", "ip": "192.168.1.10", "port": 3000},
    {"id": "2", "name": "API Server", "type": "Python", "status": "running", "ip": "192.168.1.11", "port": 8000},
]

users_db = [
    {"id": "1", "username": "admin", "email": "admin@dtr.com", "role": "admin", "is_active": True},
]

@app.get("/health")
def health():
    return {"status": "healthy", "service": "dtr-original", "version": "1.0.0"}

@app.get("/api/servers")
def get_servers():
    return servers_db

@app.get("/api/users")
def get_users():
    return users_db

@app.get("/api/security/status")
def security_status():
    return {"firewall": "active", "ssl": "valid", "ddos_protection": "enabled"}

@app.get("/api/analytics/metrics")
def get_metrics():
    return {"cpu_usage": 45.2, "memory_usage": 62.1, "disk_usage": 78.5}

@app.get("/api/analytics/dashboard")
def get_dashboard():
    return {"total_servers": len(servers_db), "active_users": len(users_db), "uptime_percentage": 99.9}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
