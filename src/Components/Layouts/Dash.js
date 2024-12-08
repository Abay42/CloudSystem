import { Link } from "react-router-dom";
import { GiBookshelf } from "react-icons/gi";
import { IoCalendarOutline } from "react-icons/io5";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiBookAdd } from "react-icons/bi";
import { RiUserAddLine } from "react-icons/ri";
import { PiBooks, PiUser, PiStudent } from "react-icons/pi";
import { useContext, useEffect } from "react";
import UserContext from "../../Hooks/UserContext";
import axios from "../../config/api/axios";

const Dash = () => {
  const { user, setPaperList } = useContext(UserContext);

  useEffect(() => {
    const getPapers = async () => {
      const response = await axios.get(`paper/${user.userType}/${user._id}`);
      setPaperList(response.data);
    };
    getPapers();
  }, [setPaperList, user]);

  return (
    <main className="self-center">
      <h2 className="m-6 font-spectral mx-auto text-center text-6xl font-bold dark:text-slate-400">
          ToU
      </h2>
      <div className="grid grid-cols-1 place-content-center gap-3 px-1 py-4 lg:grid-cols-2 lg:gap-4 lg:px-8 xl:grid-cols-3">
        <Link
          className="flex gap-2 rounded-lg bg-violet-300 p-6 text-base hover:bg-violet-400/90 dark:bg-violet-950/80 dark:hover:bg-violet-950 dark:hover:text-slate-300 duration-200 lg:text-lg"
          to={"./paper"}
        >
          <GiBookshelf className="text-[2.5rem] lg:text-[4rem] " />
          <div className="font-semibold">
            Запись
            <p className="text-sm font-normal lg:text-base ">
              Просмотреть записи
            </p>
          </div>
        </Link>

        <Link
          className="flex gap-2 rounded-lg bg-violet-300 p-6 text-base hover:bg-violet-400/90 dark:bg-violet-950/80 dark:hover:bg-violet-950 dark:hover:text-slate-300 duration-200 lg:text-lg"
          to={"./attendance"}
        >
          <IoCalendarOutline className="text-[2.5rem] lg:text-[4rem] " />
          <div className="font-semibold">
            Посещаемость
            <p className="text-sm font-normal lg:text-base ">
              Редактировать посещаемость
            </p>
          </div>
        </Link>

        <Link
          className="flex gap-2 rounded-lg bg-violet-300 p-6 text-base hover:bg-violet-400/90 dark:bg-violet-950/80 dark:hover:bg-violet-950 dark:hover:text-slate-300 duration-200 lg:text-lg"
          to={"./internal"}
        >
          <HiOutlineDocumentReport className="text-[2.5rem] lg:text-[4rem] " />
          <div className="font-semibold">
            Оценки
            <p className="text-sm font-normal lg:text-base ">
              Просмотреть или Редактировать оценки 
            </p>
          </div>
        </Link>

        <Link
          className="flex gap-2 rounded-lg bg-violet-300 p-6 text-base hover:bg-violet-400/90 dark:bg-violet-950/80 dark:hover:bg-violet-950 dark:hover:text-slate-300 duration-200 lg:text-lg"
          to={"./time_schedule"}
        >
          <AiOutlineSchedule className="text-[2.5rem] lg:text-[4rem] " />
          <div className="font-semibold">
              Расписание
            <p className="text-sm font-normal lg:text-base ">
              Редактировать расписание
            </p>
          </div>
        </Link>

        {user.role === "HOD" && (
          <>
            <Link
              className="flex gap-2 rounded-lg bg-violet-300 p-6 text-base hover:bg-violet-400/90 dark:bg-violet-950/80 dark:hover:bg-violet-950 dark:hover:text-slate-300 duration-200 lg:text-lg"
              to={"./add_paper"}
            >
              <BiBookAdd className="text-[2.5rem] lg:text-[4rem] " />
              <div className="font-semibold">
                Добавить предмет
                <p className="text-sm font-normal lg:text-base ">
                  Добавить новый предмет
                </p>
              </div>
            </Link>

            <Link
              className="flex gap-2 rounded-lg bg-violet-300 p-6 text-base hover:bg-violet-400/90 dark:bg-violet-950/80 dark:hover:bg-violet-950 dark:hover:text-slate-300 duration-200 lg:text-lg"
              to={"./approve_staff"}
            >
              <RiUserAddLine className="text-[2.5rem] lg:text-[4rem] " />
              <div className="font-semibold">
                Учителя
                <p className="text-sm font-normal lg:text-base ">
                  Учителя
                </p>
              </div>
            </Link>
          </>
        )}
        {user.role === "student" && (
          <Link
            className="flex gap-2 rounded-lg bg-violet-300 p-6 text-base hover:bg-violet-400/90 dark:bg-violet-950/80 dark:hover:bg-violet-950 dark:hover:text-slate-300 duration-200 lg:text-lg"
            to={"./join_paper"}
          >
            <PiBooks className="text-[2.5rem] lg:text-[4rem] " />
            <div className="font-semibold">
              Редактировать предметы
              <p className="text-sm font-normal lg:text-base ">
                Записаться на предмет
              </p>
            </div>
          </Link>
        )}
        <Link
          className="flex gap-2 rounded-lg bg-violet-300 p-6 text-base hover:bg-violet-400/90 dark:bg-violet-950/80 dark:hover:bg-violet-950 dark:hover:text-slate-300 duration-200 lg:text-lg"
          to={"./profile"}
        >
          {user.role === "student" ? (
            <PiStudent className="text-[2.5rem] lg:text-[4rem] " />
          ) : (
            <PiUser className="text-[2.5rem] lg:text-[4rem] " />
          )}
          <div className="font-semibold">
            Профиль
            <p className="text-sm font-normal lg:text-base ">
              Просмотреть или Редактировать профиль
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Dash;
