import React from "react";
import { Form, Select, Row, Col, Card } from "antd";
import { Controller } from "react-hook-form";
import SectionDivider from "./SectionDivider";

const { Option } = Select;

const LANGUAGE_OPTIONS = [
  "English",
  "Hindi",
  "Kannada",
  "Telugu",
  "Tamil",
  "Malayalam",
];
const RATE_OPTIONS = ["Basic", "Conversational", "Fluent", "Native"];

const LanguagesSection = ({ control, errors, getValues }) => {
  return (
    <Card className="mb-6">
      <SectionDivider orientation="left">Languages</SectionDivider>
      <p
        style={{
          fontSize: 13,
          color: "var(--color-text-secondary)",
          marginBottom: 16,
          lineHeight: 1.5,
        }}
      >
        List at least one language you speak and your level of proficiency for
        it. Additional languages are optional.
      </p>
      {Array.from({ length: 4 }).map((_, i) => {
        const isFirst = i === 0;
        return (
          <Row gutter={8} key={i}>
            <Col span={16}>
              <Controller
                name={`language${i + 1}`}
                control={control}
                rules={
                  isFirst
                    ? {
                        required: `Please select language ${i + 1}.`,
                      }
                    : {
                        validate: (value) => {
                          const rate = getValues(`rate${i + 1}`);
                          if (rate && !value) {
                            return `Please select language ${i + 1}.`;
                          }
                          return true;
                        },
                      }
                }
                render={({ field }) => (
                  <Form.Item
                    label={`Language ${i + 1}`}
                    validateStatus={errors[`language${i + 1}`] ? "error" : ""}
                    help={errors[`language${i + 1}`]?.message}
                    required={isFirst}
                  >
                    <Select
                      {...field}
                      allowClear
                      showSearch
                      placeholder="Select language"
                    >
                      {LANGUAGE_OPTIONS.map((lang) => (
                        <Option key={lang} value={lang}>
                          {lang}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                )}
              />
            </Col>
            <Col span={8}>
              <Controller
                name={`rate${i + 1}`}
                control={control}
                rules={
                  isFirst
                    ? {
                        required: `Please select proficiency for language ${i + 1}.`,
                      }
                    : {
                        validate: (value) => {
                          const language = getValues(`language${i + 1}`);
                          if (language && !value) {
                            return `Please select proficiency for language ${i + 1}.`;
                          }
                          return true;
                        },
                      }
                }
                render={({ field }) => (
                  <Form.Item
                    label="Proficiency"
                    validateStatus={errors[`rate${i + 1}`] ? "error" : ""}
                    help={errors[`rate${i + 1}`]?.message}
                    required={isFirst}
                  >
                    <Select {...field} allowClear placeholder="Select level">
                      {RATE_OPTIONS.map((rate) => (
                        <Option key={rate} value={rate}>
                          {rate}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                )}
              />
            </Col>
          </Row>
        );
      })}
    </Card>
  );
};

export default LanguagesSection;
