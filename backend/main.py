#from fastapi import FastAPI

#app = FastAPI()

#@app.get("/")
#def home():
#    return {"message": "My Portfolio API is running 🚀"}*


from fastapi import FastAPI
from routes import bio, skills, projects, contact
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(bio.router, prefix="/api/bio")
app.include_router(skills.router, prefix="/api/skills")
app.include_router(projects.router, prefix="/api/projects")
app.include_router(contact.router, prefix="/api/contact")

@app.get("/")
def home():
    return {"message": "Portfolio API is running 🚀"}



