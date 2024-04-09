import React from 'react';
import {
  FlatList,
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { IHome } from './interfaces/IHome';
import type IProject from './interfaces/IProject';

function HomeView({ onCreateProject, onCreateScreen, projects }: IHome) {
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: insets.top,
    },
  });

  return (
    <View style={StyleSheet.flatten([styles.container])}>
      <TouchableOpacity onPress={onCreateProject}><Text>Create Project</Text></TouchableOpacity>
      <View>
        <FlatList<IProject>
          data={projects}
          renderItem={({ item: { node } }) => (
            <TouchableOpacity onPress={() => onCreateScreen(node.pk)} key={node.pk}>
              <Text>
                Create Screen for project
                {node.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

export default HomeView;
