export const branding = {
    name: "branding",
    type: "document",
    title: "Branding",
    fields: [
        { name: "primario", type: "string", title: "Color Primario (Hex)" },
        { name: "secundario", type: "string", title: "Color Secundario (Hex)" },
        { name: "logo", type: "image", title: "Logo" },
    ]
};

export const servicio = {
    name: "servicio",
    type: "document",
    title: "Servicios",
    fields: [
        { name: "titulo", type: "string", title: "Título" },
        { name: "precio", type: "string", title: "Precio" },
        { name: "descripcion", type: "text", title: "Descripción" },
        { name: "imagen", type: "image", title: "Imagen", options: { hotspot: true } },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            options: { source: "titulo" }
        },
        {
            name: "categoria",
            type: "string",
            title: "Categoría",
            options: {
                list: [
                    { title: 'Cabello', value: 'Cabello' },
                    { title: 'Uñas', value: 'Uñas' },
                    { title: 'Faciales', value: 'Faciales' },
                    { title: 'Masajes', value: 'Masajes' },
                ]
            }
        },
    ]
};

export const trabajo = {
    name: "trabajo",
    type: "document",
    title: "Portafolio",
    fields: [
        { name: "titulo", type: "string", title: "Título" },
        {
            name: "categoria", type: "string", title: "Categoría", options: {
                list: [
                    { title: 'Novias', value: 'Novias' },
                    { title: 'Editorial', value: 'Editorial' },
                    { title: 'Corte y Color', value: 'Color & Corte' },
                    { title: 'Maquillaje', value: 'Maquillaje' },
                    { title: 'Estilismo', value: 'Estilismo' },
                    { title: 'Tratamientos', value: 'Tratamientos' },
                ]
            }
        },
        { name: "descripcion", type: "text", title: "Descripción" },
        { name: "imagen", type: "image", title: "Imagen", options: { hotspot: true } },
        { name: "aspecto", type: "string", title: "Aspect Rank (tailwind style, e.g. aspect-[3/4])", initialValue: "aspect-[3/4]" },
    ]
};

export const schema = {
    types: [branding, servicio, trabajo],
};
