import getProducts, { ProductInterface } from "@/api/getProducts";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import styles from "./styles.module.scss"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


const ProductList: React.FC = () => {
    const { data, isError, isPending } = useQuery({
        queryFn: async () => await getProducts(),
        queryKey: ["products"],
      });

      
    
      if(isPending){
        return(
          <div className={styles.products__container}>
            <SkeletonTheme baseColor="#eee" highlightColor="#0F52BA">
                <Skeleton  count={2} baseColor={"#eee"} width = {250} height={300} duration={200} />
            </SkeletonTheme>
            <SkeletonTheme baseColor="red" highlightColor="#0F52BA">
              <Skeleton  count={2} baseColor={"#eee"} width = {250} height={300} duration={200} />
            </SkeletonTheme>
            <SkeletonTheme baseColor="red" highlightColor="#0F52BA">
              <Skeleton  count={2} baseColor={"#eee"} width = {250} height={300} duration={200} />
            </SkeletonTheme>
            
          </div>
        )
      }


      if (isError) return <h1>Sorry There was an Error</h1>;

    return (
       <div className={styles.products__container}>
        {data?.products?.map(
          (product:ProductInterface) => {
            return (
                <Card 
                  key={product.id}
                  product={product}
                />
              
            );
          }
        )}
      </div>
    )
}

export default ProductList;