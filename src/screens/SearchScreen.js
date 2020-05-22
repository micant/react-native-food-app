import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import { SceneView } from 'react-navigation';

const SearchScreen = ({ navigation }) => {
    
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    const filterResultsByPrice = (price) => {
        return results.filter(results => {
            return results.price === price;
        });
    };

    return (
        <>
            <SearchBar
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')} 
                    title="Cost Effective" 
                    navigation={navigation}
                />
                <ResultsList 
                    results={filterResultsByPrice('$$')}   
                    title="Bit Pricier" 
                    navigation={navigation}
                />
                <ResultsList 
                    results={filterResultsByPrice('$$$')}  
                    title="Big Spender" 
                    navigation={navigation}
                />
            </ScrollView>
        </>
    )
}

styles = StyleSheet.create ({}); 

export default SearchScreen; 