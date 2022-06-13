import { getInfoCEP } from "../../utils/cep/getInfoCep"

export interface CEP {
  cep: string,
  logradouro: string,
  complemento: string,
  bairro: string,
  localidade: string,
  uf: string,
  ibge: string,
  gia: string,
  ddd: string,
  siafi: string
}

class ServiceChallengeFour {
  async execute(ceps: CEP[]): Promise<CEP[]> {    
    const infosCEPS: CEP[] = []

    for (const cep of ceps) {
      const info = await getInfoCEP(cep)
      infosCEPS.push(info)
    }
    
    return infosCEPS
  }
}

export { ServiceChallengeFour }