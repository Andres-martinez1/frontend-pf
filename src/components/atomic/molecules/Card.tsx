import { Card, CardBody } from "@heroui/react";

type CustomCardProps = {
  conten: string;
  children?: React.ReactNode; 
 className?: string;
};

export default function CustomCard({ conten,children,className="" }: CustomCardProps) {
  return (
    <Card className= {className}>
      <CardBody>
        <p className="text-default-500 text-sm mb-2">{conten}</p>
        {children}
      </CardBody>
    </Card>
  );
}
