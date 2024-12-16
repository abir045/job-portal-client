import React from "react";
import { motion } from "motion/react";
import { easeOut } from "motion";
import team1 from "../../assets/team-1.jpg";
import team2 from "../../assets/team-2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 5, repeat: Infinity }}
            src={team1}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-blue-400"
          />
          <motion.img
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 5, repeat: Infinity, delay: 5 }}
            src={team2}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-blue-400"
          />
        </div>

        <div className="flex-1">
          {/* <h1 className="text-5xl font-bold">Latest Jobs For You!</h1> */}
          <motion.h1
            animate={{ x: 50 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#ecff33", "#33ffe3", "#ff6133"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Jobs
            </motion.span>{" "}
            For You!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
