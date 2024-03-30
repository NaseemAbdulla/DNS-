import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { useRef, useState } from "react";
import { createNanoId } from "../../helpers/uidHelper";

const RECORD_TYPES = [
  "A",
  "AAAA",
  "CNAME",
  "MX",
  "NS",
  "PTR",
  "SOA",
  "SRV",
  "TXT",
  "DNSSEC",
];

export default function AddRecord({ records, setRecords }) {
  const [setMessage, setsetMessage] = useState(null);

  const [type, setType] = useState(RECORD_TYPES[0]);
  const nameRef = useRef();
  const valueRef = useRef();
  const ttlRef = useRef();
  const priorityRef = useRef();

  function onRecordAdd(e) {
    e.preventDefault();

    if (
      records.length > 0 &&
      records.map((record) => record.type).includes(type)
    ) {
      return;
    }

    setRecords((records) => [
      ...records,
      {
        id: createNanoId(),
        created_at: new Date(),
        updated_at: new Date(),
        name: nameRef.current.value,
        type: type,
        value: valueRef.current.value,
        ttl: ttlRef.current.value,
        priority: priorityRef.current.value,
      },
    ]);

    nameRef.current.value = "";
    valueRef.current.value = "";
    ttlRef.current.value = "";
    priorityRef.current.value = "";
  }

  return (
    <form onSubmit={onRecordAdd}>
      <Card className="border flex flex-col items-end">
        <CardBody className="flex space-x-4 w-full">
          <Input name="name" label="Name" inputRef={nameRef} required />
          <Select
            name="type"
            label="Type"
            value={type}
            onChange={(val) => setType(val)}
          >
            {RECORD_TYPES.map((item) => (
              <Option value={item}>{item}</Option>
            ))}
          </Select>
          <Input required label="Value" inputRef={valueRef} />
          <Input required label="TTL" inputRef={ttlRef} />
          <Input required label="Priority" inputRef={priorityRef} />
        </CardBody>
        <CardFooter className="pt-0 w-max">
          <Button type="submit">Add</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
