
# bidetabase-server

Backend API server used together with [bidetabase](https://github.com/kaninRice/bidetabase) and built using NodeJS and ExpressJS.


## Run Locally

Clone the project

```bash
  git clone https://github.com/kaninRice/bidetabase-server.git
```

Go to the project directory

```bash
  cd bidetabase-server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`CLIENT_ORIGIN`

`SERVER_PORT`

`HOST`

PostgreSQL Variables

`PG_USER`

`PG_PASSWORD`

`PG_PORT`

`PG_DATABASE`
## API Reference

#### Get all marker coordinates

```http
  GET /get-all-marker-coordinates
```

#### Get marker information

```http
  GET /get-marker-info/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of marker to fetch |


#### Add marker

```http
  POST /add-marker
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| data | `multipart/form-data` | **Required**. Marker information |

- data parts

| Parameter | Description                       |
| :-------- | :-------------------------------- |
| `file`| Image |
| `form`| *Required**. Marker information |

- form fields
    - `x` and `y` - marker coordinates
    - `location` - location description
    - `addi_description` - other additional description
