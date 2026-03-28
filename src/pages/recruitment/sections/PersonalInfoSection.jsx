import React from "react";
import { Form, Input, Select, DatePicker, Row, Col, Card } from "antd";
import { Controller } from "react-hook-form";
import SectionDivider from "./SectionDivider";

const { Option } = Select;

const PersonalInfoSection = ({ control, errors }) => (
  <Card className="mb-6">
    <SectionDivider orientation="left">Personal information</SectionDivider>
    <Row gutter={16}>
      <Col span={12}>
        <Controller
          name="firstName"
          control={control}
          rules={{ required: "Please enter your first name." }}
          render={({ field }) => (
            <Form.Item
              label="First name"
              validateStatus={errors.firstName ? "error" : ""}
              help={errors.firstName?.message}
              required
            >
              <Input {...field} />
            </Form.Item>
          )}
        />
      </Col>
      <Col span={12}>
        <Controller
          name="lastName"
          control={control}
          rules={{ required: "Please enter your last name." }}
          render={({ field }) => (
            <Form.Item
              label="Last name"
              validateStatus={errors.lastName ? "error" : ""}
              help={errors.lastName?.message}
              required
            >
              <Input {...field} />
            </Form.Item>
          )}
        />
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={12}>
        <Controller
          name="address"
          control={control}
          rules={{ required: "Please enter your full address." }}
          render={({ field }) => (
            <Form.Item
              label="Full address"
              validateStatus={errors.address ? "error" : ""}
              help={errors.address?.message}
              required
            >
              <Input {...field} />
            </Form.Item>
          )}
        />
      </Col>
      <Col span={12}>
        <Controller
          name="city"
          control={control}
          rules={{ required: "Please enter your city." }}
          render={({ field }) => (
            <Form.Item
              label="City"
              validateStatus={errors.city ? "error" : ""}
              help={errors.city?.message}
              required
            >
              <Input {...field} />
            </Form.Item>
          )}
        />
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={12}>
        <Controller
          name="country"
          control={control}
          rules={{ required: "Please enter your country." }}
          render={({ field }) => (
            <Form.Item
              label="Country"
              validateStatus={errors.country ? "error" : ""}
              help={errors.country?.message}
              required
            >
              <Input {...field} />
            </Form.Item>
          )}
        />
      </Col>
      <Col span={12}>
        <Controller
          name="placeOfBirth"
          control={control}
          rules={{ required: "Please enter your place of birth." }}
          render={({ field }) => (
            <Form.Item
              label="Place of birth"
              validateStatus={errors.placeOfBirth ? "error" : ""}
              help={errors.placeOfBirth?.message}
              required
            >
              <Input {...field} />
            </Form.Item>
          )}
        />
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={12}>
        <Controller
          name="dob"
          control={control}
          rules={{ required: "Please select your date of birth." }}
          render={({ field }) => (
            <Form.Item
              label="Date of birth"
              validateStatus={errors.dob ? "error" : ""}
              help={errors.dob?.message}
              required
            >
              <DatePicker
                {...field}
                style={{ width: "100%" }}
                format="DD/MM/YYYY"
                onChange={(date) => field.onChange(date)}
              />
            </Form.Item>
          )}
        />
      </Col>
      <Col span={12}>
        <Controller
          name="status"
          control={control}
          rules={{ required: "Please select your marital status." }}
          render={({ field }) => (
            <Form.Item
              label="Marital status"
              validateStatus={errors.status ? "error" : ""}
              help={errors.status?.message}
              required
            >
              <Select {...field} placeholder="Select marital status">
                <Option value="single">Single</Option>
                <Option value="married">Married</Option>
              </Select>
            </Form.Item>
          )}
        />
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={12}>
        <Controller
          name="telephone"
          control={control}
          rules={{ required: "Please enter your telephone number." }}
          render={({ field }) => (
            <Form.Item
              label="Telephone number"
              validateStatus={errors.telephone ? "error" : ""}
              help={errors.telephone?.message}
              required
            >
              <Input {...field} />
            </Form.Item>
          )}
        />
      </Col>
      <Col span={12}>
        <Controller
          name="cellPhone"
          control={control}
          rules={{ required: "Please enter your cell phone number." }}
          render={({ field }) => (
            <Form.Item
              label="Cell phone number"
              validateStatus={errors.cellPhone ? "error" : ""}
              help={errors.cellPhone?.message}
              required
            >
              <Input {...field} />
            </Form.Item>
          )}
        />
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={24}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Please enter your email address.",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Please enter a valid email address.",
            },
          }}
          render={({ field }) => (
            <Form.Item
              label="Email address"
              validateStatus={errors.email ? "error" : ""}
              help={errors.email?.message}
              required
            >
              <Input type="email" {...field} />
            </Form.Item>
          )}
        />
      </Col>
    </Row>
  </Card>
);

export default PersonalInfoSection;
