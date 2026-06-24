from fastapi import APIRouter
from data import skills

router = APIRouter()

@router.get("/")
def get_skills():
    return skills