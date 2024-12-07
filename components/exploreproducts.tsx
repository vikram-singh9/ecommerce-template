import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
const ExploreProducts = () => {
  return (
    <div>
      <div className="flex items-center mx-20 gap-4 mt-14">
        <span className="bg-[#DB4444] w-4 h-9 rounded-sm">.</span>
        <h2 className="text-[#DB4444] font-bold">Today's</h2>
      </div>
      <div className="mx-20 text-3xl font-bold my-4">Explore Our Products</div>

      <div className="ml-20 flex flex-wrap gap-12 mt-12 ">
        <div>
          <Image
            src={"/images/dogfood.png"}
            alt="img"
            width={220}
            height={220}
            priority
          />
        </div>

        <div>
          <Image
            src={"/images/canon.png"}
            alt="img"
            width={220}
            height={220}
            priority
          />
        </div>

        <div>
          <Image
            src={"/images/laptop.png"}
            alt="img"
            width={220}
            height={220}
            priority
          />
        </div>

        <div>
          <Image
            src={"/images/cream.png"}
            alt="img"
            width={220}
            height={220}
            priority
          />
        </div>
      </div>
      <div className='ml-20 flex flex-wrap gap-12 mt-12 '>
            <div>
                <Image
                src={'/images/car.png'}
                alt='img'
                width={220}
                height={220}
                priority
                
                 />
                 
            </div>

            <div>
                <Image
                src={'/images/shoes.png'}
                alt='img'
                width={220}
                height={220}
                priority
                
                 />
                 
            </div>

            <div>
                <Image
                src={'/images/gamepad.png'}
                alt='img'
                width={220}
                height={220}
                priority
                
                 />
                 
            </div>

            <div>
                <Image
                src={'/images/jacket.png'}
                alt='img'
                width={220}
                height={220}
                priority
                
                 />
                 
            </div>
            </div>
            <Button className="ml-[530px] my-14 " variant={"destructive"}>
        view all products
      </Button>
    </div>
  );
};

export default ExploreProducts;
