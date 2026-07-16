import { useState, useRef, useEffect } from 'react';
import { PanResponder } from 'react-native';

interface UseDragReorderProps<T> {
    items: T[];
    rowHeight: number;
    onReorder: (newItems: T[]) => void;
    keyExtractor?: (item: T) => string;
}

export function useDragReorder<T extends { id?: string | number }>({
    items,
    rowHeight,
    onReorder,
    keyExtractor
}: UseDragReorderProps<T>) {
    const [activeDragId, setActiveDragId] = useState<string | null>(null);

    const itemsRef = useRef(items);
    useEffect(() => {
        itemsRef.current = items;
    }, [items]);

    const responders = useRef<{ [key: string]: any }>({});

    const getDragHandlers = (itemId: string | number) => {
        const idStr = String(itemId);
        
        if (!responders.current[idStr]) {
            let initialIndex = 0;
            
            responders.current[idStr] = PanResponder.create({
                onStartShouldSetPanResponder: () => true,
                onMoveShouldSetPanResponder: () => true,
                onPanResponderGrant: () => {
                    setActiveDragId(idStr);
                    initialIndex = itemsRef.current.findIndex((item: any) => 
                        (keyExtractor ? keyExtractor(item) : String(item.id)) === idStr
                    );
                },
                onPanResponderMove: (_, gestureState) => {
                    const moveBy = Math.round(gestureState.dy / rowHeight);
                    const newIdx = Math.max(0, Math.min(initialIndex + moveBy, itemsRef.current.length - 1));

                    const currentIdx = itemsRef.current.findIndex((item: any) => 
                        (keyExtractor ? keyExtractor(item) : String(item.id)) === idStr
                    );
                    
                    if (newIdx !== currentIdx && newIdx >= 0) {
                        const newItems = [...itemsRef.current];
                        const item = newItems.splice(currentIdx, 1)[0];
                        newItems.splice(newIdx, 0, item);
                        
                        onReorder(newItems);
                    }
                },
                onPanResponderRelease: () => {
                    setActiveDragId(null);
                },
                onPanResponderTerminate: () => {
                    setActiveDragId(null);
                }
            });
        }
        return responders.current[idStr].panHandlers;
    };

    return {
        activeDragId,
        getDragHandlers
    };
}
