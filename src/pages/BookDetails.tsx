import { Card } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiService } from '../api/ApiService'

export default function BookDetails() {

    const { id } = useParams()
    const [book, setBook] = useState<any>([])

    useEffect (() => {
        ApiService.get(`books/${id}`)
        .then((response) => {
            setBook(response.data.result)
        })
    }, [id])

    if (!book) {
        return <div>Loading...</div>
    }

  return (
    <Card>
        <h1>Book Details</h1>


        <Card>
            <div>
                <h2>Title : {book.title}</h2>
                <p>Author : {book.author}</p>
            </div>
            <div>
                <p>Type : {book.type}</p>
                <p>Location : {book.location}</p>
            </div>
            
        </Card>
        <Card>
            <h2>History</h2>
            {book.history?.map((item:any) => (
                <Card style={{backgroundColor: 'grey', margin:10, width:'50%'}}>
                    <p>Date d'emprunt : {new Date(item.emprunt).toLocaleString("FR")}</p>
                    <p>Date de rendu : {new Date(item.rendu).toLocaleString("FR")}</p>
                    <p>Code d'identification utilisateur :{item.user}</p>
                </Card>
            ))}
        </Card>
        
    </Card>
  )
}
