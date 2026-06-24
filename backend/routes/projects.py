from fastapi import APIRouter
from data import projects

router = APIRouter()

@router.get("/")
def get_projects():
    return projects