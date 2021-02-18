import React, { useEffect, useState } from 'react'
import Checkbox from '../../shared/Checkbox'
import LineChart from '../../shared/LineChart'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import { Container, Wrapper } from './App.styles'

function App () {
    const [lettuce, setLettuce] = useState()
    const [healthy, setHealthy] = useState(20)

    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

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
                    <LineChart color={colors[0]} title="saudavel" percentage={80}/>
                    <LineChart color={colors[1]} title="não tão saudavel" percentage={20}/>
                    <LineChart color={colors[2]} title="limpeza" percentage={35}/>
                    <LineChart color={colors[3]} title="outros" percentage={15}/>
                </div>}
        />
        </Container>
    </Wrapper>
}

export default App