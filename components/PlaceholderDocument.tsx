'use client'
import { PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

function PlaceholderDocument() {

const router = useRouter()
    const handleClick = () => {
        // checking if user is pro or not and if cross free limit then send to pro plan pricing 
        router.push("/dashboard/upload")
    }

 
  return (
    <Button onClick={handleClick} className="flex flex-col items-center justify-center w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400">
        <PlusCircleIcon className="h-16 w-16"/>
        <p>Add a Document</p>
    </Button>
  )
}

export default PlaceholderDocument
