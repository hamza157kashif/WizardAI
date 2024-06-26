"use client";

import { testimonials } from "@/constants";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item)=> (
            <Card key={item.id} className="bg-[#192339] border-none text-white">
                <CardHeader>
                    <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-white bg-gradient-to-r from-purple-400 to-pink-600">
                            {item?.name?.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                    <CardTitle className="flex items-center gap-x-2">
                        <div>
                            <p className="text-lg">{item.name}</p>
                            <p className="text-zince-400 text-sm">{item.title}</p>
                        </div>
                    </CardTitle>
                    <CardContent className="pt-4 px-0">
                        {item.description}
                    </CardContent>
                </CardHeader>
            </Card>
        ))}
      </div>
    </div>
  )
}

export default LandingContent
