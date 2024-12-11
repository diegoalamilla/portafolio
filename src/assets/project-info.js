export const projects = [{
    id: 0,
    name: 'Concentus', 
    description: 'Es una plataforma web que centraliza la búsqueda de boletos para conciertos en México. Ofrece información actualizada sobre eventos, disponibilidad de boletos, y facilita el acceso a la compra, con opciones de favoritos y notificaciones personalizadas.' ,
    repo_url: 'https://github.com/CarlosMay7/Desarrollo-App-Web',
    technologies: [
        {name: "javascript", image: "/javascript.png"},
        {name: "php", image: "/php.png"}

    ]
},
{
    id: 1,
    name: 'LectorRSS', 
    description: 'Un lector de RSS que centraliza noticias de múltiples portales en un solo lugar, permitiendo a los usuarios filtrar y buscar contenido de manera eficiente.' ,
    repo_url: 'https://github.com/CarlosJCD/PrimeraEntregaOptimizacionWeb',
    technologies: [
        {name: "javascript", image: "/javascript.png"},
        {name: "php", image: "/php.png"}

    ]
    
},
{
    id: 2,
    name: 'Sistema de Votación', 
    description: 'Un sistema de votaciones que permite a los usuarios votar por productos a través de un broker, que facilita la gestión de votaciones entre varios servidores. Incluye gráficos en tiempo real y opciones para elegir el servicio de votación preferido. ' ,
    repo_url: 'https://github.com/diegoalamilla/BrokerApp',
    technologies: [
        {
            name: "Java", image: "/java.png"
        }
    ]
},
{
    id: 3,
    name: 'Type-Perfect', 
    description: 'Una aplicación de escritorio para practicar mecanografía, ofreciendo entrenamiento con una o ambas manos. Registra el progreso del usuario mediante logs, calculando precisión, tiempo y permitiendo configuraciones personalizadas.' ,
    repo_url: 'https://github.com/MiguelCastilloSanchez/TypePerfect-Aplication',
    technologies: [
        {
            name: "Java", image: "/java.png"
        }
    ]
},
{
    id: 4,
    name: 'Api-Rest en AWS',
    description: 'Una API REST que permite a los usuarios realizar operaciones CRUD en una base de datos MySQL alojada en un RDS de AWS. Incluye endpoints para obtener, crear, actualizar y eliminar registros, así como subir fotos de perfil a un S3 y manejar sesiones en una tabla en DynamoDB. Hecho en Spring-Boot y se despliega en un contenedor Docker en una instancia EC2.' ,
    repo_url: 'https://github.com/diegoalamilla/AppRest',
    technologies: [
        {
            name: "Java", image: "/java.png"
        },
        {
            name: "AWS", image: "/aws.jpg"
        }
    ]
}
]