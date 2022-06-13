import axios from 'axios'
import { CEP } from '../../services/service-challenge-four'

async function getInfoCEP(cep): Promise<CEP> {
  const url = `https://viacep.com.br/ws/${cep}/json/` 
  const { data } = await axios.get(url)
    
  return data
}

export { getInfoCEP }