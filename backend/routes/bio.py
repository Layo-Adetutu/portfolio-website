from fastapi import APIRouter
from data import bio

router = APIRouter()

@router.get("/")
def get_bio():
    return bio