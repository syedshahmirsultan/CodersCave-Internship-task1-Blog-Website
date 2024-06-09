

export async function getAllBlogs(){
 const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-09/data/query/production?query=*%5B_type+%3D%3D+%27post%27%5D%7B%0A++slug%2C%0A++++mainImage%2C%0A++++author-%3E%2C%0A++++description%2C%0A++++categories%5B%5D-%3E%2C%0A++++body%2C%0A++++title%0A%7D`)
  
  if(!res.ok){
     return "Error"
  }

  return res.json();
}


export async function getAiBlogs(){
    const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-09/data/query/production?query=*%5B_type+%3D%3D+%27post%27+%26%26+%27AI%27+in+categories%5B%5D-%3Etitle%5D%7B%0A++slug%2C%0A++++mainImage%2C%0A++++author-%3E%2C%0A++++description%2C%0A++++categories%5B%5D-%3E%2C%0A++++body%2C%0A++++title%0A%7D`)

    if(!res.ok){
        return "Error"
    }

    return res.json()

}

export async function getAgricultureBlogs(){
    const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-09/data/query/production?query=*%5B_type+%3D%3D+%27post%27+%26%26+%27Agriculture%27+in+categories%5B%5D-%3Etitle%5D%7B%0A++slug%2C%0A++++mainImage%2C%0A++++author-%3E%2C%0A++++description%2C%0A++++categories%5B%5D-%3E%2C%0A++++body%2C%0A++++title%0A%7D`)
 
    if(!res.ok){
        return "Error"
    }

    return res.json();
}


export async function getHealthcareBlogs(){
    const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-06-09/data/query/production?query=*%5B_type+%3D%3D+%27post%27+%26%26+%27Health+Care%27+in+categories%5B%5D-%3Etitle%5D%7B%0A++slug%2C%0A++++mainImage%2C%0A++++author-%3E%2C%0A++++description%2C%0A++++categories%5B%5D-%3E%2C%0A++++body%2C%0A++++title%0A%7D`)

 if(!res.ok){
         return "Error"
    }

    return res.json();
}