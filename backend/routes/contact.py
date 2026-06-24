from fastapi import APIRouter
from data import contact

router = APIRouter()

@router.get("/")
def get_contact():
    return contact