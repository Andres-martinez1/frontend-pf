import { Card, CardBody, Form } from "@heroui/react";
import { ReactNode } from "react";

interface AuthFormTemplateProps {
  title: string;
  children: ReactNode; 
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const AuthFormTemplate = ({ title, children, onSubmit }: AuthFormTemplateProps) => {
  return (
    <Card fullWidth className="w-full max-w-md rounded-3xl shadow-lg">
      <CardBody className="p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <Form className="flex flex-col gap-6" onSubmit={onSubmit}>
          {children} 
        </Form>
      </CardBody>
    </Card>
  );
};

export default AuthFormTemplate;