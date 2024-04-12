import Questions from '../app/(viewquestions)/_components/sample.questionDB.json'
import { z } from 'zod'

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

    if(result.success === false){
        return result.error.formErrors.fieldErrors
    }

    const data = result.data;

    const SubjectQuestions = Questions.filter(item => item.subject === data.subject);

    const totalMarks = data.maxMarks;
    const [easyMarks, mediumMarks, hardMarks] = [totalMarks/data.easy, totalMarks/data.medium, totalMarks/data.hard];

    const questionList = [];
    var tempMarks = 0;
    const EasyQuestions = SubjectQuestions.filter(item => item.difficulty === 'easy');
    const MediumQuestions = SubjectQuestions.filter(item => item.difficulty === 'medium');
    const HardQuestions = SubjectQuestions.filter(item => item.difficulty === 'hard');

    while(easyMarks <= tempMarks){
        let length = EasyQuestions.length;

        let visited = Array(length).fill(0);

        let index = Math.floor(Math.random() * length);
        if(visited[index] === 1){
            continue;
        }
        
        tempMarks += EasyQuestions[index].marks;
        
        if(easyMarks >= tempMarks && visited[index] === 0){
            questionList.push(EasyQuestions[index])
            visited[index] = 1;
        }

        if (visited.every(val => val === 1)) {
            break; 
        }

        if(easyMarks < tempMarks && visited.some(val => val === 0)){
            visited[index] = 1;
            continue;
        }

    }

    tempMarks = 0;

    while(mediumMarks <= tempMarks){
        let length = MediumQuestions.length;
        let index = Math.floor(Math.random() * length);

        tempMarks += MediumQuestions[index].marks;
        if(mediumMarks > tempMarks)
            break;
        questionList.push(MediumQuestions[index]);
    }

    tempMarks = 0;

    while(hardMarks <= tempMarks){
        let length = HardQuestions.length;
        let index = Math.floor(Math.random() * length);

        tempMarks += HardQuestions[index].marks;
        if(hardMarks > tempMarks)
            break;
        questionList.push(HardQuestions[index]);
    }

}