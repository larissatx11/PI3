# Projeto Integrador III
# Fast Route - Otimização de Rotas para Distribuição da UFC

O **Fast Route** é um software desenvolvido para determinar as melhores rotas possíveis para veículos de distribuição da UFC. O sistema permite que o usuário defina a localização de pontos de entrega, calcule a rota mais eficiente e gerencie veículos e perfis de usuários.

## Funcionalidades

### Mapa
- **Visualizar Pontos**: Exibe os pontos de entrega cadastrados em um mapa interativo.
- **Adicionar Pontos**: Permite ao usuário clicar no mapa para adicionar novos pontos de entrega, salvando automaticamente a latitude, longitude e endereço.

### Rotas
- **Buscar Rotas**: Calcula a melhor rota entre dois pontos de entrega cadastrados.

### Ônibus
- **Adicionar Ônibus**: Permite cadastrar novos veículos (ônibus) para distribuição.
- **Visualizar Ônibus**: Exibe os ônibus cadastrados para uma instituição específica.

### Perfil
- **Editar Perfil**: Permite ao usuário editar suas informações pessoais.
- **Excluir Perfil**: Permite ao usuário excluir sua conta.
- **Cadastro e Login**: Sistema de autenticação para acesso seguro ao sistema.
- **Sair**: Encerra a sessão do usuário.

## Tecnologias Utilizadas

### Front-end
- **React.js**: Biblioteca JavaScript para construção da interface do usuário.
- **React Leaflet**: Integração com mapas interativos usando a API do OpenStreetMap.
- **Vite**: Ferramenta de build para desenvolvimento rápido.
- **CSS Modules**: Para estilização dos componentes.

### Back-end
- **ASP.NET Core**: Framework para desenvolvimento de APIs RESTful.
- **Entity Framework Core**: ORM para persistência de dados no banco de dados.
- **SQL Server**: Banco de dados relacional para armazenamento de informações.

### Outras Ferramentas
- **OpenStreetMap API**: Para cálculo de rotas e exibição de mapas.
- **Git**: Controle de versão do projeto.

## Como Executar o Projeto

### Pré-requisitos
- Node.js (para o front-end)
- .NET SDK (para o back-end)
- SQL Server (ou outro banco de dados compatível com Entity Framework Core)

### Passos para Configuração

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/fast-route.git
   cd fast-route

# Passo a Passo para Rodar o Projeto
## Clone o Repositório:
     git clone https://github.com/larissatx11/PI3.git
     cd PI3
## Configure a String de Conexão no arquivo appsettings.json (coloque as informações do seu banco):
    "ConnectionStrings": {
       "DefaultConnection": "Server=localhost;Database=fast_route_BD;User=root;Password=SUA-SENHA;"
     }
## Navegue até a pasta do backend e instale os pacotes:
     cd fast_route_backend
     dotnet restore
## Aplique as Migrations para configurar o banco de dados:
     dotnet ef database update
## Rodar o Backend
     dotnet run
## Navegue até a pasta do frontend e instale os pacotes:
     cd ../fast_route
     npm install
     npm install lucide-react
     npm run dev
