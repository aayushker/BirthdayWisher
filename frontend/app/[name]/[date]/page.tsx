import { parseISO, isSameDay } from "date-fns";
import BirthdayCountdown from "@/components/BirthdayCountdown";
import BirthdayCelebration from "@/components/BirthdayCelebration";

export default async function BirthdayPage({
  params,
}: {
  params: { name: string; date: string };
}) {
  const { name, date } = await params;
  const [day, month, year] = date.split("-");
  const birthdate = new Date(`${year}-${month}-${day}`);
  console.log(birthdate);
  const today = new Date();
  console.log(today);
  const isBirthday =
    today.getDate() === birthdate.getDate() &&
    today.getMonth() === birthdate.getMonth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">
        {isBirthday ? `Happy Birthday ${name}!` : "Countdown!"}
      </h1>
      {isBirthday ? (
        <BirthdayCelebration name={name} />
      ) : (
        <BirthdayCountdown name={name} birthdate={birthdate} />
      )}
      {/* <BirthdayCelebration name={name} /> */}
    </main>
  );
}
