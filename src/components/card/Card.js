import * as React from 'react';
import { Card, Title, Paragraph, DataTable, Subheading } from 'react-native-paper';

const TotalCaseCardComponent = ({ options }) => {
  return (
    <Card>
      <Card.Content>
        <Title>{options.title}</Title>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>A</DataTable.Title>
            <DataTable.Title>B</DataTable.Title>
            <DataTable.Title>B</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row>
            <DataTable.Cell numeric>10</DataTable.Cell>
            <DataTable.Cell numeric>11</DataTable.Cell>
            <DataTable.Cell numeric>12</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </Card.Content>
    </Card>
  );
}

export const TableCardComponent = ({ options }) => {
  return (
    <Card style={{
      border: "solid 1px",
      borderRadius: "2em"
    }}>
      <Card.Content>
        <Card.Title
          title={options.title}
          subtitle={options.subtitle}
          />
        <DataTable>
          <DataTable.Header>
            {
              options.content.headers.map(
                (header, index) => <DataTable.Title key={index} style={{ display:'flex', justifyContent: 'center', fontWeight: 'bold'}}>{header}</DataTable.Title>
              )
            }
          </DataTable.Header>
          {
            options.content.data.map(
              (row, index) => (<DataTable.Row key={index}>{
                row.map(
                  (cell, index) => (<DataTable.Cell key={index} style={{ display:'flex', justifyContent: 'center', fontWeight: 'bold'}}>{cell}</DataTable.Cell>)
                )
              }</DataTable.Row>)
            )
          }
        </DataTable>
        <Card.Title
          subtitle={options.content.footer}
          subtitleStyle={{ textAlign: "right" }}
        />
      </Card.Content>
    </Card>
  );
}

export const LocationCardItem = ({ options, onPress }) => {
  return (
    <Card
      style={{
        border: "solid 1px",
        borderRadius: "2em",
      }}
      onPress={onPress}
      >
      <Card.Content>
        <Card.Title
          title={options.title}
          subtitle={options.subtitle}
          />
        <DataTable>
          <DataTable.Header>
            {
              options.content.headers.map(
                (header, index) => <DataTable.Title key={index} style={{ display:'flex', justifyContent: 'center', fontWeight: 'bold'}}>{header}</DataTable.Title>
              )
            }
          </DataTable.Header>
          {
            options.content.data.map(
              (row, index) => (<DataTable.Row key={index}>{
                row.map(
                  (cell, index) => (<DataTable.Cell key={index} style={{ display:'flex', justifyContent: 'center', fontWeight: 'bold'}}>{cell}</DataTable.Cell>)
                )
              }</DataTable.Row>)
            )
          }
        </DataTable>
        <Card.Title
          subtitle={options.content.footer}
          subtitleStyle={{ textAlign: "right" }}
        />
      </Card.Content>
    </Card>
  );
}

export const FaseCard = (data) => {
  let msjPhase = '';
  switch(parseInt(data.phase)) {
    case 1:
      msjPhase = 'Cuarentena';
      break;
    case 2:
      msjPhase = 'Transicion';
      break;
    case 3:
      msjPhase = 'Preparacion';
      break;
    case 4:
      msjPhase = 'Apertura Inicial';
      break;
    default:
      msjPhase = 'Desconocido';
      break;
  };
  const paragraph = `Fase ${data.phase} : ${msjPhase}`;
  return (
    <Card style={{
        border: "solid 1px",
        borderRadius: "2em"
      }}>
      <Card.Content>
        <Title>Plan paso a paso</Title>
        <Paragraph>{paragraph}</Paragraph>
      </Card.Content>
    </Card>
  );
}

export default TotalCaseCardComponent;
