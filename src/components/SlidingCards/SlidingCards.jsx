'use client'
import { useState } from 'react'
import Card from './Card.jsx/Card'
import styles from './SlidingCards.module.css'
 
export default function SlidingCards() {

    const [selectedCard, setSelectedCard] = useState(INFO[0].slug)
return (
<div className={styles.container}>
    {INFO.map(({title, description, image, slug}, i) => {
        return (
            <Card title={title} description={description} image={image} key={i} selected={slug === selectedCard} onClick={() => setSelectedCard(slug)}/>
        )
    })}
</div>
)}


const INFO = [
    {
        title: 'Title 1',
        description: 'Description 1',
        image: 'https://images.pexels.com/photos/23643826/pexels-photo-23643826/free-photo-of-a-woman-standing-on-a-pier-with-a-dog.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
        slug: 'card1'
        
    },
    {
        title: 'Title 2',
        description: 'Description 2',
        image: 'https://images.pexels.com/photos/9320042/pexels-photo-9320042.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
        slug: 'card2'

        
    },
    {
        title: 'Title 3',
        description: 'Description 3',
        image: 'https://images.pexels.com/photos/19718703/pexels-photo-19718703/free-photo-of-young-woman-in-a-white-shirt-sitting-at-a-desert.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
        slug: 'card3'

        
    },
    {
        title: 'Title 4',
        description: 'Description 4',
        image: 'https://images.pexels.com/photos/26548185/pexels-photo-26548185/free-photo-of-woman-leaning-on-chair-on-seashore.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
        slug: 'card4'

        
    }
]