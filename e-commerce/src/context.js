import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
// Provider 
// Consumer
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  }
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let products = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => {
      return { products };
    });
  }

  getItem = (id) => {
    return this.state.products.find((item) => item.id === id);
  }

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product }
    })
  }
  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(() => {
      return { products: tempProducts, cart: [...this.state.cart, product] }
    }, () => { this.addTotals(); });
  }

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    })
  }

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    })
  }
  increase = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProducts = tempCart.find(item => item.id === id);
    if (!selectedProducts) { return; }
    else {
      const index = tempCart.indexOf(selectedProducts);
      const product = tempCart[index];
      product.count = product.count + 1;
      product.total = product.count * product.price;
      this.setState(() => {
        return {
          cart: [...tempCart]
        }
      }, () => { this.addTotals(); }
      )
    }
  }
  decrease = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProducts = tempCart.find(item => item.id === id);
    if (!selectedProducts) { return; }
    else {
      const index = tempCart.indexOf(selectedProducts);
      const product = tempCart[index];
      if (product.count === 1) {
        this.remove(id);
      }
      else {
        product.count = product.count - 1;
        product.total = product.count * product.price;
        this.setState(() => {
          return {
            cart: [...tempCart]
          }
        }, () => { this.addTotals(); }
        )
      }
    }

  }
  remove = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProducts]
      }
    }, () => {
      this.addTotals();
    })
  }
  clearCart = () => {
    this.setState(() => {
      return { cart: [] };
    }, () => {
      this.setProducts();
      this.addTotals();
    }
    )
  }
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => subTotal += item.total)
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => { return { cartSubTotal: subTotal, cartTax: tax, cartTotal: total } })


  }
  render() {
    return (
      <ProductContext.Provider value={{ ...this.state, handleDetail: this.handleDetail, addToCart: this.addToCart, openModal: this.openModal, closeModal: this.closeModal, increase: this.increase, decrease: this.decrease, remove: this.remove, clearCart: this.clearCart }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
