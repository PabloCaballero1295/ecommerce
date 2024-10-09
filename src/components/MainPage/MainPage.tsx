import { useEffect, useState } from "react"
import axios from "axios"
import { MainLayout } from "../MainLayout/MainLayout"
import { ProductCard } from "../ProductCard/ProductCard"
import styles from "./MainPage.module.css"
import { Product } from "../../types/product"
import config from "../../config/config"

export const MainPage = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          config.backendBaseURL + "/api/products"
        )

        setProducts(response.data as Product[])
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }
    fetchProducts()
  }, [])

  return (
    <MainLayout>
      <div className="container">
        <div className={styles.title}>Productos</div>
        <div className={styles.products_grid}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
        consectetur fermentum nibh ac feugiat. Fusce euismod purus neque, at
        volutpat nibh molestie et. In sit amet risus blandit, feugiat est non,
        pharetra ex. Praesent molestie elit sed ultrices condimentum. Mauris
        elementum lectus non arcu lobortis, ut semper mauris fermentum. Maecenas
        at venenatis diam. Aenean erat nibh, maximus vitae tristique ac,
        pellentesque nec libero. Maecenas quis mattis tellus, ullamcorper dictum
        neque. Ut ac bibendum purus. Nulla fermentum ligula eget libero
        ultrices, fringilla gravida eros placerat. Phasellus id sapien tortor.
        Integer nec lobortis diam, ut facilisis nunc. Pellentesque lectus justo,
        efficitur mollis sapien vel, lacinia finibus ante. Donec congue interdum
        enim, laoreet lobortis orci accumsan a. Vestibulum vel arcu justo.
        Phasellus varius nisi vitae sem elementum sagittis. Morbi dapibus
        ullamcorper eros in bibendum. Donec cursus condimentum turpis. Etiam ac
        venenatis turpis, at tristique sapien. Vestibulum malesuada tortor eu
        eros tincidunt, quis vehicula dolor egestas. Maecenas finibus dolor
        nulla, a gravida felis imperdiet ac. Suspendisse ut tellus nisl. Morbi
        non lacinia felis, ut facilisis tortor. Aliquam laoreet tempus orci ac
        varius. Etiam fermentum accumsan enim consequat finibus. Morbi sodales
        nunc id dui iaculis, quis dignissim ligula aliquam. Curabitur placerat
        in turpis sed faucibus. Pellentesque bibendum lacus at velit lobortis
        sollicitudin. Sed non turpis orci. Sed ex augue, tincidunt eu velit
        vitae, tempus aliquam neque. Praesent finibus tempor metus et efficitur.
        Nulla molestie mauris quis justo placerat scelerisque. Donec consectetur
        orci ut est posuere imperdiet. Duis porta aliquam vestibulum. Vestibulum
        efficitur, tortor a placerat vestibulum, arcu tellus blandit ex, sed
        iaculis nisl lectus a velit. Maecenas ullamcorper dui libero, quis
        condimentum diam venenatis in. Sed a fermentum purus, at imperdiet
        tellus. Mauris tincidunt, eros id ultricies lobortis, eros nunc
        convallis velit, et scelerisque enim est malesuada ipsum. Vivamus luctus
        euismod ex eu placerat. Sed venenatis tellus est, nec aliquet augue
        suscipit non. Pellentesque venenatis luctus tellus eu eleifend. Etiam
        facilisis purus vitae tristique interdum. Etiam auctor tellus ac dui
        sagittis finibus. Mauris pulvinar, lacus et tempus porttitor, erat nisi
        lobortis nisl, in vehicula dui dolor nec metus. Ut ut neque nec neque
        facilisis fermentum. Nulla facilisi. Maecenas mi erat, sagittis at
        tempus id, accumsan in ante. Nulla turpis mi, tristique et rhoncus non,
        fringilla nec lectus. Nam egestas elementum porta. Sed a dui ultrices,
        ullamcorper libero eu, consequat sem. Donec a sagittis magna. Maecenas
        aliquet vel massa sed ullamcorper. Donec molestie nunc ut ante placerat,
        vel dapibus magna congue. Proin condimentum sapien et libero commodo
        consequat. Sed non erat et lectus posuere placerat. Quisque non
        ultricies mauris, vel tincidunt ligula. Mauris sed lorem velit. In
        eleifend leo sed ante accumsan rhoncus. Aliquam interdum blandit magna
        eu porta. Aenean sed mi id augue consectetur molestie eget nec mauris.
        Donec vitae aliquet justo. Morbi quam diam, imperdiet elementum
        vulputate vitae, commodo ut felis. Aenean a libero in arcu dapibus
        fermentum eu ut sem. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Proin consectetur fermentum nibh ac feugiat. Fusce euismod purus
        neque, at volutpat nibh molestie et. In sit amet risus blandit, feugiat
        est non, pharetra ex. Praesent molestie elit sed ultrices condimentum.
        Mauris elementum lectus non arcu lobortis, ut semper mauris fermentum.
        Maecenas at venenatis diam. Aenean erat nibh, maximus vitae tristique
        ac, pellentesque nec libero. Maecenas quis mattis tellus, ullamcorper
        dictum neque. Ut ac bibendum purus. Nulla fermentum ligula eget libero
        ultrices, fringilla gravida eros placerat. Phasellus id sapien tortor.
        Integer nec lobortis diam, ut facilisis nunc. Pellentesque lectus justo,
        efficitur mollis sapien vel, lacinia finibus ante. Donec congue interdum
        enim, laoreet lobortis orci accumsan a. Vestibulum vel arcu justo.
        Phasellus varius nisi vitae sem elementum sagittis. Morbi dapibus
        ullamcorper eros in bibendum. Donec cursus condimentum turpis. Etiam ac
        venenatis turpis, at tristique sapien. Vestibulum malesuada tortor eu
        eros tincidunt, quis vehicula dolor egestas. Maecenas finibus dolor
        nulla, a gravida felis imperdiet ac. Suspendisse ut tellus nisl. Morbi
        non lacinia felis, ut facilisis tortor. Aliquam laoreet tempus orci ac
        varius. Etiam fermentum accumsan enim consequat finibus. Morbi sodales
        nunc id dui iaculis, quis dignissim ligula aliquam. Curabitur placerat
        in turpis sed faucibus. Pellentesque bibendum lacus at velit lobortis
        sollicitudin. Sed non turpis orci. Sed ex augue, tincidunt eu velit
        vitae, tempus aliquam neque. Praesent finibus tempor metus et efficitur.
        Nulla molestie mauris quis justo placerat scelerisque. Donec consectetur
        orci ut est posuere imperdiet. Duis porta aliquam vestibulum. Vestibulum
        efficitur, tortor a placerat vestibulum, arcu tellus blandit ex, sed
        iaculis nisl lectus a velit. Maecenas ullamcorper dui libero, quis
        condimentum diam venenatis in. Sed a fermentum purus, at imperdiet
        tellus. Mauris tincidunt, eros id ultricies lobortis, eros nunc
        convallis velit, et scelerisque enim est malesuada ipsum. Vivamus luctus
        euismod ex eu placerat. Sed venenatis tellus est, nec aliquet augue
        suscipit non. Pellentesque venenatis luctus tellus eu eleifend. Etiam
        facilisis purus vitae tristique interdum. Etiam auctor tellus ac dui
        sagittis finibus. Mauris pulvinar, lacus et tempus porttitor, erat nisi
        lobortis nisl, in vehicula dui dolor nec metus. Ut ut neque nec neque
        facilisis fermentum. Nulla facilisi. Maecenas mi erat, sagittis at
        tempus id, accumsan in ante. Nulla turpis mi, tristique et rhoncus non,
        fringilla nec lectus. Nam egestas elementum porta. Sed a dui ultrices,
        ullamcorper libero eu, consequat sem. Donec a sagittis magna. Maecenas
        aliquet vel massa sed ullamcorper. Donec molestie nunc ut ante placerat,
        vel dapibus magna congue. Proin condimentum sapien et libero commodo
        consequat. Sed non erat et lectus posuere placerat. Quisque non
        ultricies mauris, vel tincidunt ligula. Mauris sed lorem velit. In
        eleifend leo sed ante accumsan rhoncus. Aliquam interdum blandit magna
        eu porta. Aenean sed mi id augue consectetur molestie eget nec mauris.
        Donec vitae aliquet justo. Morbi quam diam, imperdiet elementum
        vulputate vitae, commodo ut felis. Aenean a libero in arcu dapibus
        fermentum eu ut sem. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Proin consectetur fermentum nibh ac feugiat. Fusce euismod purus
        neque, at volutpat nibh molestie et. In sit amet risus blandit, feugiat
        est non, pharetra ex. Praesent molestie elit sed ultrices condimentum.
        Mauris elementum lectus non arcu lobortis, ut semper mauris fermentum.
        Maecenas at venenatis diam. Aenean erat nibh, maximus vitae tristique
        ac, pellentesque nec libero. Maecenas quis mattis tellus, ullamcorper
        dictum neque. Ut ac bibendum purus. Nulla fermentum ligula eget libero
        ultrices, fringilla gravida eros placerat. Phasellus id sapien tortor.
        Integer nec lobortis diam, ut facilisis nunc. Pellentesque lectus justo,
        efficitur mollis sapien vel, lacinia finibus ante. Donec congue interdum
        enim, laoreet lobortis orci accumsan a. Vestibulum vel arcu justo.
        Phasellus varius nisi vitae sem elementum sagittis. Morbi dapibus
        ullamcorper eros in bibendum. Donec cursus condimentum turpis. Etiam ac
        venenatis turpis, at tristique sapien. Vestibulum malesuada tortor eu
        eros tincidunt, quis vehicula dolor egestas. Maecenas finibus dolor
        nulla, a gravida felis imperdiet ac. Suspendisse ut tellus nisl. Morbi
        non lacinia felis, ut facilisis tortor. Aliquam laoreet tempus orci ac
        varius. Etiam fermentum accumsan enim consequat finibus. Morbi sodales
        nunc id dui iaculis, quis dignissim ligula aliquam. Curabitur placerat
        in turpis sed faucibus. Pellentesque bibendum lacus at velit lobortis
        sollicitudin. Sed non turpis orci. Sed ex augue, tincidunt eu velit
        vitae, tempus aliquam neque. Praesent finibus tempor metus et efficitur.
        Nulla molestie mauris quis justo placerat scelerisque. Donec consectetur
        orci ut est posuere imperdiet. Duis porta aliquam vestibulum. Vestibulum
        efficitur, tortor a placerat vestibulum, arcu tellus blandit ex, sed
        iaculis nisl lectus a velit. Maecenas ullamcorper dui libero, quis
        condimentum diam venenatis in. Sed a fermentum purus, at imperdiet
        tellus. Mauris tincidunt, eros id ultricies lobortis, eros nunc
        convallis velit, et scelerisque enim est malesuada ipsum. Vivamus luctus
        euismod ex eu placerat. Sed venenatis tellus est, nec aliquet augue
        suscipit non. Pellentesque venenatis luctus tellus eu eleifend. Etiam
        facilisis purus vitae tristique interdum. Etiam auctor tellus ac dui
        sagittis finibus. Mauris pulvinar, lacus et tempus porttitor, erat nisi
        lobortis nisl, in vehicula dui dolor nec metus. Ut ut neque nec neque
        facilisis fermentum. Nulla facilisi. Maecenas mi erat, sagittis at
        tempus id, accumsan in ante. Nulla turpis mi, tristique et rhoncus non,
        fringilla nec lectus. Nam egestas elementum porta. Sed a dui ultrices,
        ullamcorper libero eu, consequat sem. Donec a sagittis magna. Maecenas
        aliquet vel massa sed ullamcorper. Donec molestie nunc ut ante placerat,
        vel dapibus magna congue. Proin condimentum sapien et libero commodo
        consequat. Sed non erat et lectus posuere placerat. Quisque non
        ultricies mauris, vel tincidunt ligula. Mauris sed lorem velit. In
        eleifend leo sed ante accumsan rhoncus. Aliquam interdum blandit magna
        eu porta. Aenean sed mi id augue consectetur molestie eget nec mauris.
        Donec vitae aliquet justo. Morbi quam diam, imperdiet elementum
        vulputate vitae, commodo ut felis. Aenean a libero in arcu dapibus
        fermentum eu ut sem. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Proin consectetur fermentum nibh ac feugiat. Fusce euismod purus
        neque, at volutpat nibh molestie et. In sit amet risus blandit, feugiat
        est non, pharetra ex. Praesent molestie elit sed ultrices condimentum.
        Mauris elementum lectus non arcu lobortis, ut semper mauris fermentum.
        Maecenas at venenatis diam. Aenean erat nibh, maximus vitae tristique
        ac, pellentesque nec libero. Maecenas quis mattis tellus, ullamcorper
        dictum neque. Ut ac bibendum purus. Nulla fermentum ligula eget libero
        ultrices, fringilla gravida eros placerat. Phasellus id sapien tortor.
        Integer nec lobortis diam, ut facilisis nunc. Pellentesque lectus justo,
        efficitur mollis sapien vel, lacinia finibus ante. Donec congue interdum
        enim, laoreet lobortis orci accumsan a. Vestibulum vel arcu justo.
        Phasellus varius nisi vitae sem elementum sagittis. Morbi dapibus
        ullamcorper eros in bibendum. Donec cursus condimentum turpis. Etiam ac
        venenatis turpis, at tristique sapien. Vestibulum malesuada tortor eu
        eros tincidunt, quis vehicula dolor egestas. Maecenas finibus dolor
        nulla, a gravida felis imperdiet ac. Suspendisse ut tellus nisl. Morbi
        non lacinia felis, ut facilisis tortor. Aliquam laoreet tempus orci ac
        varius. Etiam fermentum accumsan enim consequat finibus. Morbi sodales
        nunc id dui iaculis, quis dignissim ligula aliquam. Curabitur placerat
        in turpis sed faucibus. Pellentesque bibendum lacus at velit lobortis
        sollicitudin. Sed non turpis orci. Sed ex augue, tincidunt eu velit
        vitae, tempus aliquam neque. Praesent finibus tempor metus et efficitur.
        Nulla molestie mauris quis justo placerat scelerisque. Donec consectetur
        orci ut est posuere imperdiet. Duis porta aliquam vestibulum. Vestibulum
        efficitur, tortor a placerat vestibulum, arcu tellus blandit ex, sed
        iaculis nisl lectus a velit. Maecenas ullamcorper dui libero, quis
        condimentum diam venenatis in. Sed a fermentum purus, at imperdiet
        tellus. Mauris tincidunt, eros id ultricies lobortis, eros nunc
        convallis velit, et scelerisque enim est malesuada ipsum. Vivamus luctus
        euismod ex eu placerat. Sed venenatis tellus est, nec aliquet augue
        suscipit non. Pellentesque venenatis luctus tellus eu eleifend. Etiam
        facilisis purus vitae tristique interdum. Etiam auctor tellus ac dui
        sagittis finibus. Mauris pulvinar, lacus et tempus porttitor, erat nisi
        lobortis nisl, in vehicula dui dolor nec metus. Ut ut neque nec neque
        facilisis fermentum. Nulla facilisi. Maecenas mi erat, sagittis at
        tempus id, accumsan in ante. Nulla turpis mi, tristique et rhoncus non,
        fringilla nec lectus. Nam egestas elementum porta. Sed a dui ultrices,
        ullamcorper libero eu, consequat sem. Donec a sagittis magna. Maecenas
        aliquet vel massa sed ullamcorper. Donec molestie nunc ut ante placerat,
        vel dapibus magna congue. Proin condimentum sapien et libero commodo
        consequat. Sed non erat et lectus posuere placerat. Quisque non
        ultricies mauris, vel tincidunt ligula. Mauris sed lorem velit. In
        eleifend leo sed ante accumsan rhoncus. Aliquam interdum blandit magna
        eu porta. Aenean sed mi id augue consectetur molestie eget nec mauris.
        Donec vitae aliquet justo. Morbi quam diam, imperdiet elementum
        vulputate vitae, commodo ut felis. Aenean a libero in arcu dapibus
        fermentum eu ut sem.
      </div>
    </MainLayout>
  )
}
