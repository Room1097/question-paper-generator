import Questions from '@/app/(client)/(viewquestions)/_components/sample.questionDB.json';
import { z } from 'zod';

const getQuestionSchema = z.object({
    subject: z.string().min(2).max(20),
    easy: z.coerce.number().nonnegative().min(0).max(100),
    medium: z.coerce.number().nonnegative().min(0).max(100),
    hard: z.coerce.number().nonnegative().min(0).max(100),
    numberOfQuestions: z.coerce.number().nonnegative().min(0).max(100),
    maxMarks: z.coerce.number().nonnegative().min(0).max(100),
});

export function generateRandomQuestionSet(formdata: FormData) {

    const result = getQuestionSchema.safeParse(Object.fromEntries(formdata.entries()));

    if (result.success === false) {
        return result.error.formErrors.fieldErrors;
    }

    const data = result.data;

    console.log(result.data)

    const SubjectQuestions = Questions.filter(item => item.subject === data.subject);

    // console.log(SubjectQuestions)

    const totalMarks = data.maxMarks;
    const [easyMarks, mediumMarks, hardMarks] = [totalMarks * data.easy / 100, totalMarks * data.medium /100, totalMarks * data.hard/100];

    // console.log(easyMarks)
    // console.log(mediumMarks)
    // console.log(hardMarks)

    const questionList = [];
    let tempMarks = 0;
    const EasyQuestions = SubjectQuestions.filter(item => item.difficulty === 'easy');
    const MediumQuestions = SubjectQuestions.filter(item => item.difficulty === 'medium');
    const HardQuestions = SubjectQuestions.filter(item => item.difficulty === 'hard');

    // console.log(EasyQuestions)
    // console.log(MediumQuestions)
    // console.log(HardQuestions)

    const [easyLength, mediumLength, hardLength] = [EasyQuestions.length, MediumQuestions.length, HardQuestions.length];

    // console.log(easyLength)
    // console.log(mediumLength)
    // console.log(hardLength)

    const [easyVisited, mediumVisited, hardVisited] = [Array(easyLength).fill(0), Array(mediumLength).fill(0), Array(hardLength).fill(0)];

    // console.log(easyVisited)
    // console.log(mediumVisited)
    // console.log(hardVisited)

    while(easyMarks > tempMarks){
        const index = Math.floor(Math.random() * easyLength);

        if(easyVisited[index] === 1){
            continue;
        }

        if(easyVisited.every(val => val === 1)){
            break;
        }

        tempMarks += EasyQuestions[index].marks;

        if(easyMarks >= tempMarks){
            questionList.push(EasyQuestions[index]);
            easyVisited[index] = 1;
        }
    }

    // console.log("Easy:" + questionList);

    tempMarks = 0;

    while(mediumMarks > tempMarks){
        const index = Math.floor(Math.random() * mediumLength);

        if(mediumVisited[index] === 1){
            continue;
        }

        if(mediumVisited.every(val => val === 1)){
            break;
        }

        tempMarks += MediumQuestions[index].marks;

        if(mediumMarks >= tempMarks){
            questionList.push(MediumQuestions[index]);
            mediumVisited[index] = 1;
        }
    }

    console.log(questionList);

    tempMarks = 0;

    while(hardMarks > tempMarks){
        const index = Math.floor(Math.random() * hardLength);

        if(hardVisited[index] === 1){
            continue;
        }

        if(hardVisited.every(val => val === 1)){
            break;
        }

        tempMarks += HardQuestions[index].marks;

        if(hardMarks >= tempMarks){
            questionList.push(HardQuestions[index]);
            hardVisited[index] = 1;
        }
    }
    
    console.log(questionList)
}