import React, { useState } from 'react'
import Checkbox from '../../shared/Checkbox'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import { Container, Wrapper } from './App.styles'

function App () {
    const [lettuce, setLettuce] = useState()


    return <Wrapper>
        <Container>
          <AppHeader />
            <AppContainer 
                left={<div>
                    Produtos Disponiveis
                    <Checkbox
                    value={lettuce} 
                    title="Alface"
                    onClick={() => setLettuce(!lettuce)}
                    />
                </div>}
                middle={<div>
                    Sua lista de compras
                </div>}
                right={<div> 
                    Estatísticas
                </div>}
        />
        </Container>
    </Wrapper>
}

export default App