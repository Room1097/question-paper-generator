"use client";
import axios from "axios";
import { PencilIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function UpdateQuestion({ id }: { id: string }) {
    return (
      <Link
        href={`/viewquestions/${id}/edit`}
        className="rounded-md border p-2 hover:bg-white hover:text-black ml-5"
      >
        <PencilIcon className="w-5" />
      </Link>
    );
  }

const router = useRouter();
async function DeleteQuestion({
    question,
  }: {
    question: { questionId: string; subject: string };
  }) {
    async function deleteQuestionButton(){
      try {
        await axios.delete(`/api/question`, {data: question});
        router.refresh();
        console.log("deleted question")
      } catch (error) {
        console.log(error);
      }
    }
    return (
      <div className="rounded-md border p-2 hover:bg-red-700 hover:text-white" onClick={deleteQuestionButton} >
        <TrashIcon className="w-5" />
      </div>
    );
  }
  