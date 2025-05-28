import EmptyState from '@/components/EmptyState'
import React from 'react'
import rite from '@/assets/svg/rite.svg'



export default function MyReviews() {
  return (
    <main>
      <EmptyState image={rite} title={`Здесь будут Ваши отзывы`}  />
    </main>
  )
}
