"use client"

import Image from "next/image"

export default function PostImage({ src, alt }: any) {
    return (
        <Image
            width={100}
            height={100}
            src={src}
            alt={alt}
            className="w-full object-contain"
            style={{ height: '200px' }} // Altura fixa para manter a consistência visual
            onError={(e) => { e.currentTarget.src = '/images/404.png' }} // Imagem padrão caso não exista
        />
    )
}