import { detailOfSingleBlog, getAllBlogs } from '@/app/utils/apiCalling';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types';
import { SingleBlogType,AllBlogType } from '../../../../types';
import BriefBlog from '@/app/components/BriefBlog';


export const dynamic='force-dynamic'

export async function generateStaticParams(){
    const data = await getAllBlogs() ;
    return data.result.map((item:SingleBlogType) => {slug :item.slug })

}

export async function generateMetadata({params}:{params :{slug :string}}){
    const slug = params.slug;
    const detail = await detailOfSingleBlog(slug);
    return{
     title : detail.result[0].productname,
    }  
}


const Brief = async({params} :{params :{slug:string}}) => {
    return (
        <div>
            <Detail slug={params.slug}/>
        </div>
    );
}


async function Detail ({slug} :{slug:string}){
    const data = await detailOfSingleBlog(slug);
    const { getUser } = getKindeServerSession();
    const user = await getUser();
return (
    <>
    <BriefBlog BlogData={data.result[0]}/>
    </>
)
}

export default Brief;
    
   