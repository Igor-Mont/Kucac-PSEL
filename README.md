<div align="center">
  <h1>Processo Seletivo Kukac</h1>
</div>


<div align="center">
<img src="https://img.shields.io/badge/npm-8.11.0-green" />
<img src="https://img.shields.io/badge/node-16.15.1-green" />
<img src="https://img.shields.io/badge/typescript-4.7.3-7159c1" />
</div>
<hr/>

<h2> 🎬 Tecnologias</h2>
 
<ul>
  <li><a target="_blank" href="https://nodejs.org/pt-br/" >NodeJS</a> - Código base do projeto.</li>
  <li><a target="_blank" href="https://www.typescriptlang.org/" >Typescript</a> - Facilitar na hora do desenvolvimento</li>
  <li><a target="_blank" href="https://axios-http.com/ptbr/docs/intro" >Axios</a> - Cliente HTTP</li>
</ul>
<hr/>

<h3 align="center">Ao invés de utilizar o framework Express, optei por utilizar realmente o Node.js puro para a resolução dos desafios.</h3>

<h2 align="center">Resolução dos 4 desafios ⬇️</h2>

<h3>Desafio 1:</h3>

- POST - <http://localhost:3000/challenges/one>;

<p>Responses</p>

- Status Code
  - 200: Requisição executada com sucesso.
  - 400: Erros de validação ou campos não informados.

<p>Request (application/json)</p>

- Parameters
  - start: (required, number)
  - end: (required, number)

- Body
  - ```typescript
    {
      "start": 10,
      "end": 100
    }
    ```

- Response 200 (application/json)
  - ```typescript
    [ 11, 22, 33, 44, 55, 66, 77, 88, 99]
    ```
<h3>Desafio 2:</h3>

- POST - <http://localhost:3000/challenges/two>;

<p>Responses</p>

- Status Code
  - 200: Requisição executada com sucesso.
  - 400: Erros de validação ou campos não informados.

<p>Request (application/json)</p>

- Parameters
  - total: (required, number)
  - amount: (required, number)

- Body
  - ```typescript
    {
      "total": 15,
      "amount": 50
    }
    ```

- Response 200 (application/json)
  - ```typescript
    {
      "total": 15,
      "amount": 50,
      "notes": {
        "notes_100": 0,
        "notes_10": 3,
        "notes_1": 5
      }
    }
    ```

<h3>Desafio 3:</h3>

- POST - <http://localhost:3000/challenges/three>;

<p>Responses</p>

- Status Code
  - 200: Requisição executada com sucesso.
  - 400: Erros de validação ou campos não informados.

<p>Request (application/json)</p>

- Parameters
  - model: (required, string)
  - fabrication_year: (required, number)
  - brand: (required, string)
  - doors: (string)
  - passengers: (string)

- Body
  - ```typescript
    {
      "model": "Modelo",
      "fabrication_year": 2020,
      "brand": "marca",
      "doors": 2
    }
    ```
  - ```typescript
    {
      "model": "Modelo",
      "fabrication_year": 2020,
      "brand": "marca",
      "passengers": 2
    }
    ```


- Responses 200 (application/json)
  - ```typescript
    {
      "model": "Modelo",
      "fabrication_year": 2020,
      "brand": "marca",
      "doors": 2
    }
    ```
  - ```typescript
    {
      "model": "Modelo",
      "fabrication_year": 2020,
      "brand": "marca",
      "passengers": 2,
      "wheels": 2
    }
    ```

<h3>Desafio 4:</h3>

- POST - <http://localhost:3000/challenges/two>;

<p>Responses</p>

- Status Code
  - 200: Requisição executada com sucesso.
  - 400: Erros de validação ou campos não informados.

<p>Request (application/json)</p>

- Parameters
  - ceps: (required, number[])

- Body
  - ```typescript
    {
      "ceps": [49360000, 49350000, 49400000, 49220000, 49200000]
    }
    ```

- Response 200 (application/json)
  - ```typescript
    [
	{
		"cep": "49360-000",
		"logradouro": "",
		"complemento": "",
		"bairro": "",
		"localidade": "Boquim",
		"uf": "SE",
		"ibge": "2800670",
		"gia": "",
		"ddd": "79",
		"siafi": "3115"
	},
	{
		"cep": "49350-000",
		"logradouro": "",
		"complemento": "",
		"bairro": "",
		"localidade": "Pedrinhas",
		"uf": "SE",
		"ibge": "2805109",
		"gia": "",
		"ddd": "79",
		"siafi": "3201"
	},
	{
		"cep": "49400-000",
		"logradouro": "",
		"complemento": "",
		"bairro": "",
		"localidade": "Lagarto",
		"uf": "SE",
		"ibge": "2803500",
		"gia": "",
		"ddd": "79",
		"siafi": "3169"
	},
	{
		"cep": "49220-000",
		"logradouro": "",
		"complemento": "",
		"bairro": "",
		"localidade": "Arauá",
		"uf": "SE",
		"ibge": "2800407",
		"gia": "",
		"ddd": "79",
		"siafi": "3107"
	},
	{
		"cep": "49200-000",
		"logradouro": "",
		"complemento": "",
		"bairro": "",
		"localidade": "Estância",
		"uf": "SE",
		"ibge": "2802106",
		"gia": "",
		"ddd": "79",
		"siafi": "3141"
	}
]
    ```


