import React, { useEffect, useState } from 'react'
import LineChart from '../../shared/LineChart'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import ShoppingList from '../ShoppingList'
import { Container, Wrapper } from './App.styles'
import extractPercentage from '../../utils/extractPercentage'
import Calculator from '../Calculator'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllProducts, selectSelectedProducts, selectSelectedProductTotalPrice } from '../../store/Products/Products.selectors'
import { toggleProduct } from '../../store/Products/Products.actions'

function App () {
    const dispatch = useDispatch();
    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

    const products = useSelector(selectAllProducts)
    const selectedProducts = useSelector(selectSelectedProducts)
    const totalPrice = useSelector(selectSelectedProductTotalPrice)
    
    function handleToggle (id) {
        dispatch(toggleProduct(id))
    }

    return <Wrapper>
        <Container>
          <AppHeader />
            <AppContainer 
                left={<ShoppingList title="Produtos disponiveis" onToggle={handleToggle} />}
                middle={<ShoppingList title="Sua lista de compras" displayOnlySelected onToggle={handleToggle}/>}
                right={<div> 
                    Estatísticas

                    <LineChart 
                    color={colors[0]} 
                    title="saudavel" 
                    percentage={extractPercentage(
                        selectedProducts.length,
                        selectedProducts.filter(product => product.tags.includes('healthy')).length
                    )}
                    />
                    <LineChart 
                    color={colors[1]} 
                    title="não tão saudavel" 
                    percentage={extractPercentage(
                        selectedProducts.length,
                        selectedProducts.filter(product => product.tags.includes('junk')).length
                    )}
                    />
                    <LineChart 
                    color={colors[2]} 
                    title="limpeza" 
                    percentage={extractPercentage(
                        selectedProducts.length,
                        selectedProducts.filter(product => product.tags.includes('cleaning')).length
                    )}
                    />
                    <LineChart 
                    color={colors[3]} 
                    title="outros" 
                    percentage={extractPercentage(
                        selectedProducts.length,
                        selectedProducts.filter(product => product.tags.includes('others')).length
                    )}
                    />
                    <div style = {{ marginTop:12}}>
                        <h2 style = {{fontWeight: 400, fontSize: 12, color: '#00364a'}}>
                            Previsão de Gastos:
                        </h2>
                        <div style = {{ fontSize: 24}}>
                            { totalPrice.toLocaleString('pt-br' ,{
                            minimumFractionDigits: 2,
                            style: 'currency',
                            currency: 'BRL'
                            }) }
                        </div>

                        <Calculator />

                    </div>
                </div>}
        />
        </Container>
    </Wrapper>
}

export default App