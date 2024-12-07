import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const SaleProduct = () => {
  return (
    <div className="ml-20 flex flex-wrap gap-14 h-[500px]">
      <div>
        <Image
          src={"/images/box1.png"}
          alt="img"
          width={220}
          height={220}
          priority
        />
      </div>

      <div>
        <Image
          src={"/images/box2.png"}
          alt="img"
          width={220}
          height={220}
          priority
        />
      </div>

      <div>
        <Image
          src={"/images/box3.png"}
          alt="img"
          width={220}
          height={220}
          priority
        />
      </div>

      <div>
        <Image
          src={"/images/box4.png"}
          alt="img"
          width={220}
          height={220}
          priority
        />
      </div>

      <Button className="ml-[440px] mb-72 " variant={"destructive"}>
        view all products
      </Button>
    </div>
  );
};

export default SaleProduct;
