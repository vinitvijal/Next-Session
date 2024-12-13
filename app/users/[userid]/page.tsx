import React from 'react'

function page({ params }: { params: { userid: string}}) {

  return (
    <div>
      Your Personal Page: {params.userid}
    </div>
  )
}

export default page
