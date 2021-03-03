import MainLayout from "../layouts/MainLayout";
import Head from "next/head";
import CategoryBox from "../components/CategoryBox/CategoryBox";
import Carousel from "../components/Carousel/Carousel";
import Pagination from "../components/Pagegination/PaginationContainer";
import { arr } from "../mockup/mockup";
const itemSlide = [
  {
    src: "https://images.unsplash.com/photo-1497339100210-9e87df79c218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    alt: "First slide"
  },
  {
    src: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    alt: "Second slide"
  },
  {
    src: "https://images.unsplash.com/photo-1512445239398-6d0c4c575b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    alt: "Third slide"
  },
]

const Index = () => {
  return (
    <MainLayout>
      <Head>
        <title>
          Nattraphak
        </title>
      </Head>
      <div className="container-fluid p-0">
        <Carousel dataSlide={itemSlide} />
        <div className="col-12 w-100">
          <div className="content-width">
            <div className="row">
              <CategoryBox name="Category 1" />
              <CategoryBox name="Category 2" />
              <CategoryBox name="Category 3" />
            </div>
          </div>
        </div>
        <div className="col-12 text-center">
          <Pagination title="เสื้อผ้าแนะนำสำหรับคุณ."
            data={arr}
            itemsPerPage={20}
          />
        </div>
      </div>
    </MainLayout>

  )
}

export default Index