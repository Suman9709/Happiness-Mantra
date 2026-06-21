'use client'

import React from "react";

type Props = { params: { slug: string } };

export default function Page({ params }: Props) {
    const { slug } = params;
    return <div>Course: {slug}</div>;
}