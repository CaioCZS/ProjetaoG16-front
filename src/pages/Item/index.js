import { useEffect, useState } from "react"
import Header from "../../components/Header"
// import Search from "../../components/Search";
import {
  ContainerBody,
  ContainerItem,
  ContainerProduct,
  ShippingIcon,
  ContainerDescription,
} from "./style"
import productApi from "../../services/productApi"
import { useParams } from "react-router"
import SideBar from "../../components/SideBar"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import UserContext from "../../Context/UserContext.js"

export default function Item() {
  const { user } = useContext(UserContext)
  const [hidden, setHidden] = useState(true)
  const { id } = useParams()
  const [item, setItem] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  })
  const navigate = useNavigate()

  function getItem() {
    productApi
      .item(id)
      .then((res) => setItem(res.data))
      .catch((err) => alert(err.response.data))
  }

  function page(page) {
    navigate(page)
  }

  function postBuy(id) {
    productApi
      .buy(id)
      .then(() => page("/carrinho"))
      .catch((err) => alert(err.response.data))
  }

  useEffect(getItem, [id])

  return (
    <>
      <Header hidden={hidden} setHidden={setHidden} />
      <SideBar hidden={hidden} setHidden={setHidden} />
      <ContainerBody>
        {/*<Search />*/}
        <ContainerItem>
          <img alt="product" src={item.image} />
        </ContainerItem>
        <ContainerProduct>
          <div className="title">
            <h2>{item.name}</h2>
            <h2>{item.price}</h2>
          </div>
          <div className="shipping">
            <ShippingIcon />
            <h3>FRETE GRÁTIS</h3>
          </div>
          <div className="buy">
            <button
              onClick={() => (user.token ? postBuy(id) : alert("Faça login!"))}
            >
              COMPRAR
            </button>
          </div>
        </ContainerProduct>
        <ContainerDescription>
          <h2>DESCRIÇÃO</h2>
          <p>{item.description}</p>
        </ContainerDescription>
      </ContainerBody>
    </>
  )
}
