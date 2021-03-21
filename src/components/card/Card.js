import * as React from 'react';
import { Card, Title, Paragraph, DataTable } from 'react-native-paper';

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
    <Card>
      <Card.Content>
        <Title>{options.title}</Title>        
        <DataTable>
          <DataTable.Header>
            {
              options.content.headers.map(
                (header, index) => <DataTable.Title key={index} >{header}</DataTable.Title>
              )
            }
          </DataTable.Header>
          {
            options.content.data.map(
              (row, index) => (<DataTable.Row key={index} >{
                row.map(
                  (cell, index) => (<DataTable.Cell key={index} numeric>{cell}</DataTable.Cell>)
                )
              }</DataTable.Row>)
            )
          }
        </DataTable>
      </Card.Content>     
    </Card>
  );
}

export default TotalCaseCardComponent;