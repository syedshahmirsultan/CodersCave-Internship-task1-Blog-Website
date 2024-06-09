


export interface singleProductTypeImage {
    _type: string;
    _key: string;
    asset: {
      _ref: string;
      _type: string;
    };
  }





interface singleBlogTypeDescription{
    _type: string,
    style: string,
    _key: string,
    markDefs: [],
    children: [ [Object] ]
}

interface singleBlogTypeImage{
    _type: string,
    asset: {
      _type: string,
      _ref: string
        }
      }
      
interface singleBlogTypeCategory{
  _updatedAt: string,
  _createdAt: string,
  _rev: string,
  _type: string,
  _id: string,
  title: string
}


interface singleBlogTypeSlug{ 
    current: string,
     _type: string
 } 

 interface singleBlogTypeAuthor {
  _rev: string,
  _type: string,
  name: string,
  _id: string,
  _updatedAt: string,
  image: {
    _type: string,
    alt: string,
    asset: {
      _type: string,
      _ref: string
    }
  },
  _createdAt: '2024-06-09T06:47:31Z'
}

export interface SingleBlogType {
        categories:Array<singleBlogTypeCategory> ,
        slug: singleBlogTypeSlug,
        mainImage: singleBlogTypeImage,
        author: singleBlogTypeAuthor,
        description: singleBlogTypeDescription,
        body:string,
        title:string
      }

     

export interface AllBlogType {
    result: SingleBlogType[],
    query:string
}